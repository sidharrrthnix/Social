import mysql.connector
from difflib import get_close_matches

connect = mysql.connector.connect(
    user='ardit700_student',
    password='ardit700_student',
    host='108.167.140.122',
    database='ardit700_pm1database'
)


cursor = connect.cursor()

word = input('Enter a word: ')

query = cursor.execute(
    "SELECT * FROM Dictionary WHERE Expression = '%s' " % word)

result = cursor.fetchall()

if result:
    for item in result:
        print(item[1])

else:
    print('please try again')
