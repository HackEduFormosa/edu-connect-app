from pymongo import MongoClient
from faker import Faker
from dotenv import load_dotenv
import os
import datetime
import random

# Cargar variables de entorno del archivo .env
load_dotenv()

# Configurar conexión a MongoDB
def connect_db():
    mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost:27017/')
    client = MongoClient(mongo_uri)
    db = client['formosaemprende_db']  # Nombre de la base de datos del proyecto
    return db

# Función para generar fechas de nacimiento aleatorias
def generate_birthdate():
    start_date = datetime.date(1950, 1, 1)
    end_date = datetime.date(2000, 12, 31)
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    return start_date + datetime.timedelta(days=random_number_of_days)

# Función para convertir la fecha de nacimiento a una cadena en formato ISO
def format_date(date):
    return date.isoformat()

# Función para generar usuarios ficticios
def generate_users(num_users):
    fake = Faker()
    users = []
    for _ in range(num_users):
        user = {
            'name': fake.name(),
            'email': fake.email(),
            'password': fake.password(),
            'birthdate': format_date(generate_birthdate())  # Convierte la fecha a cadena ISO
        }
        users.append(user)
    return users

# Función principal
def main():
    db = connect_db()
    users_collection = db['usersgenerate']  # Nombre de la colección
    num_users = 1000
    users = generate_users(num_users)
    try:
        users_collection.insert_many(users)
        print(f'{num_users} users generated')
    except Exception as e:
        print(f'Error generating users: {e}')

if __name__ == '__main__':
    main()
