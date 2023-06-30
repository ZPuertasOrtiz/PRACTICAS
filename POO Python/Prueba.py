#CLASS
 
class Monster:
    #Attributes
    def __init__(self,health,energy): #the init method initialize the attributes
        self.health = health 
        self.energy = energy  
    #methods
    def __call__(self): #the object becomes a function, just receives self
        return 'something'
    def __add__(self,other): # receives two parameters, permite que los objetos de  una clase sean sumados usando el +, self es el primer objeto y other el segundo.
        return self.health + other
    def attack(self): #Always needs at least one parameter and it will be a reference to the class itself (the first parameter)
        print ('The monster has attacked!') 
        self.energy -= 20 
        print (self.energy)
    
    def move (self,speed): #the self parameters has no realtionship but both of them make a reference to the Monster class
        print (f'The monster has {speed}')
        
#There are methods called dunder methods, this methods aa
    
monster = Monster(10,20)
print(monster.energy)#this is an instance of class Monster
print (dir(monster)) #Return all the dunder methods and the normal methods at the final. All objects have dunder methods given to them by default.

#USEFUL METHODS:
# dict--> retorna todos los atributos del método dentro de un diccionario. Ejemplo:
print (monster.__dict__) #También puedo usar la función Vars:
#Vars toma como objeto un argumento y devuleve un diccionario con los atributos, devolverá los atributos de la INSTANCIA
print(vars(monster)) #---> {'health': 10, 'energy': 20}

# print (monster())  #call the instance as if it were a function
# print (monster + 10)



#CREAR UN OBJETO DE UNA FUNCIÓN

def add(a,b):
    print(a+b)

class Test:
    def __init__(self,add_function):
        self.add_function =add_function

test = Test(add_function = add)
test.add_function(1,2)
test.add_function(1,2)


def func 