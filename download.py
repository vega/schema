import json
import urllib.error, urllib.request
import os
import errno

def force_symlink(file1, file2):
    try:
        os.symlink(file1, file2)
    except OSError as e:
        if e.errno == errno.EEXIST:
            os.remove(file2)
            os.symlink(file1, file2)

for lib in ['vega', 'vega-lite']:
    with open('{lib}.json'.format(lib=lib)) as f:
        parsed = json.load(f)
        for tag in parsed:
            version = tag['ref'].replace('refs/tags/', '')
            url = 'https://raw.githubusercontent.com/vega/{lib}/{version}/{lib}-schema.json'.format(version=version, lib=lib)
            try:
                urllib.request.urlretrieve(url, "{lib}/{version}.json".format(version=version, lib=lib))
                split = version.split('.')
                force_symlink("./{version}.json".format(version=version, lib=lib), "{lib}/{version}.json".format(version=split[0], lib=lib))
                force_symlink("./{version}.json".format(version=version, lib=lib), "{lib}/{version}.json".format(version=split[0]+'.'+split[1], lib=lib))
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    pass
                else:
                    raise
