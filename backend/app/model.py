from tensorflow.keras.models import load_model
from pythainlp import word_tokenize, word_vector
import numpy as np

class DataCleaner:
    @staticmethod
    def preprocess(st, word2vec, max_len):
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
        x = np.expand_dims(DataCleaner.preprocess(st, word2vec, max_len), 0)
        out = model.predict(x)[0, 1]
        return out


class MinmaiminModel:
    def __init__(self):
        self.model = ''

    def load_model(self):
        self.model = load_model('../model_v1.pb')
        print('load success.')

    def predict(self, sentence):
        word2vec = word_vector.get_model()
        output = DataCleaner.process_query(sentence, self.model, word2vec, 100)
        return output
