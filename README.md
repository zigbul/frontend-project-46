# **Gendiff** 

## **Project description**
Compares two configuration files and shows a difference.

## **Installing:**
```
npm install
```

## **Options:**
```
Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

## **Output format types:**
- stylish - represent output like github diff
- plain - represent readable output with characters
- json - represent standart JSON output format

## **Usage:**
----------------
_Stylish format_
```
gendiff -f stylish <pathToFile1> <pathToFile2>
```
[![asciicast](https://asciinema.org/a/ZZLWu6WSwret5RkTJXZ6lrdpJ.svg)](https://asciinema.org/a/ZZLWu6WSwret5RkTJXZ6lrdpJ)

--------------
_Plain format_
```
gendiff -f plain <pathToFile1> <pathToFile2>
```
[![asciicast](https://asciinema.org/a/hB6YJ6VVPU4wlBSqusbZuKTAB.svg)](https://asciinema.org/a/hB6YJ6VVPU4wlBSqusbZuKTAB)

-------------
_JSON format_
```
gendiff -f json <pathToFile1> <pathToFile2>
```
[![asciicast](https://asciinema.org/a/Wn109aBVirMzOe1SgVyyzkWCy.svg)](https://asciinema.org/a/Wn109aBVirMzOe1SgVyyzkWCy)

----------------
_Default format_
```
gendiff <pathToFile1> <pathToFile2>
```
[![asciicast](https://asciinema.org/a/HakfHe8S9JrIOwQFwdJNHyeos.svg)](https://asciinema.org/a/HakfHe8S9JrIOwQFwdJNHyeos)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/zigbul/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zigbul/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/763e9c06e56d896af9cf/maintainability)](https://codeclimate.com/github/zigbul/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/763e9c06e56d896af9cf/test_coverage)](https://codeclimate.com/github/zigbul/frontend-project-46/test_coverage)
