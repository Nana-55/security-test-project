import sqlite3

SECRET_KEY = "super_secret_password_999"

def login(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'"
    cursor.execute(query)
    return cursor.fetchall()
