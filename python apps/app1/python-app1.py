import json
from difflib import get_close_matches

data = json.load(open('data/data.json'))


def dictionary(letter):
    letter = letter.lower()

    if letter in data:
        return data[letter]

    elif len(get_close_matches(letter,data.keys()))>0:
        proceed = input('Did you mean %s ? If Yes then type Y else type N if no : ' %get_close_matches(letter,data.keys())[0])
        
        if proceed == 'Y':
            return data[get_close_matches(letter,data.keys())[0]]
        
        elif proceed == 'N':
            return 'The word doest exist,please double check it'

        else:
            return "We didn't quite understand your input"

    else:
        return 'The word doesnt exist, please double check it'


word = input('Enter your word : ')

output = dictionary(word)


if type(output) == list:

    for item in output:
        print(item)

else:
    print(output)



    