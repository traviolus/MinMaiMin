from pythainlp import word_vector
from pythainlp.tokenize import word_tokenize
from tensorflow.keras.models import *
from tqdm.notebook import tqdm as tqdm_notebook
import tensorflow as tf
import numpy as np
import pandas as pd

class DataCleaner:
    @staticmethod
    def preprocess(st, word2vec, max_len):
        '''
        text -> tokenize -> word2vec -> embeddings
        '''
        ws = word_tokenize(st, engine='deepcut')
        x = []
        for w in ws:
            try:
                x.append(word2vec[w])
            except:
                x.append(np.zeros((300,)))
        for i in range(max(0,max_len-len(ws))):
            x.append(np.zeros((300,)))
        x = np.vstack(x)
        return x

    @staticmethod
    def process_query(st, model, word2vec, max_len=75):
        '''
        Perform model prediction on string st
        '''
        x = np.expand_dims(DataCleaner.preprocess(st, word2vec, max_len), 0)
        out = model.predict(x)[0, 1]
        return out

    @staticmethod
    def preprocess_data(df, word2vec, max_len=75):
        x = []
        for i in tqdm_notebook(range(len(df))):
            st = df['sentence'].iloc[i]
            _x = np.expand_dims(preprocess(st, word2vec, max_len), 0)
            x.append(_x)
        x = np.concatenate(x)
        y = np.array(df['y'])
        return x, y


class MinmaiminModel:
    def __init__(self):
        self.model = load_model('../model_files/minmaimin_LSTM.h5')
        self.deka_file = pd.read_csv("../model_files/dataframe.csv")
        self.max_len = 100
        self.word2vec = word_vector.get_model()
        self.deka = []
        self.idx = []
        self.x, self.y = DataCleaner.preprocess_data(self.deka_file, self.word2vec, self.max_len)

        for i in range(len(self.deka_file)):
            self.deka.append([self.deka_file.iloc[i][1],self.deka_file.iloc[i][3]])
        
        for i in range(len(self.deka_file)):
            self.idx.append(i)

    def predict(self, sentence):
        word2vec = word_vector.get_model()
        output = DataCleaner.process_query(sentence, self.model, self.word2vec, self.max_len)
        response = {'result': str(round(output*100,2))+'%', 'top_related': []}
        word_near=[]
        for ridx, item in zip(self.idx, self.model.predict(self.x)[:, 1]):
            for i in self.deka:
                if i[0]==self.deka_file.iloc[ridx]['sentence']:
                    response['top_related'].append({
                        'sentence': df_data_final.iloc[ridx]['sentence'],
                        'deka': i[1]
                    })

        return response
