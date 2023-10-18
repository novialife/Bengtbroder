import pandas as pd


class FeaturePipeline:
    def __init__(self):
        pass

    def load_data(self, path):
        self.df = pd.read_csv(path)

    def get_data(self):
        return self.df




if __name__ == '__main__':
    fp = FeaturePipeline()
    fp.load_data("../data/beer_reviews.csv")
    print(fp.get_data()[["beer_style"]].head())
