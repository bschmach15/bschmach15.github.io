import csv
import json
import os

class CSVReader:
    """Iterate through the rows of the CSV file.
    The iterator returns a dictionary with the column names as keys. The
    values of the dictionary are strings, they may need to be casted.
    """

    def __init__(self, csvpath):

        self.csvfile = open(csvpath,'r')
        self.reader = csv.DictReader(self.csvfile, delimiter=',')
        self.header = self.reader.__next__()

    def __iter__(self):

        return self

    def next(self):
        """Returns a dictionary with column names as keys and the cell contents
        as values. The values are strings.
        """

        # Retrieve the next row from the file.
        try:
            row = self.reader.next()
        except StopIteration:
            self.csvfile.close()
            raise

        item = dict()
        for ncol in range(len(row)):
            item[self.header[ncol]] = row[ncol]

        return item


if __name__ == '__main__':

    # Create the CSV reader
    reader = CSVReader('stellarNamesData.csv')

    # The data will be stored as a feature collection
    feature = {'type': 'FeatureCollection', 'features': []}

    for row in reader.reader:

        # Compute the magnitude and equivalent (ish) longitude and latitude
        mag = float(row['AppMag'])
        lon = - float(row['RA'])
        lat = float(row['Dec'])
        name = row['Name']

        # Store only the stars visible to the naked eye
        if mag < 4.25:
            feature['features'].append({
                'type': 'Feature',
                'properties': {'mag': mag, 'name': name},
                'geometry': {'type': 'Point', 'coordinates': [lon, lat]}
            })

    # Store the stars as a GeoJSON file
    jsonfile = open('stars.json', 'w')
    json.dump(feature, jsonfile)
    jsonfile.close()