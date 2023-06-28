#CLASS
 
class Monster:
    #Attributes
    health = 90  
    energy = 40  
    #methods
    def attack(self): #Always need at least one parameter and it will be a reference to the class itself (the first parameter)
        print ('The monster has attacked!') 
        self.energy -= 20 
        print (self.energy)
    
    def move (self,speed): #the self parameters has no realtionship but both of them make a reference to the Monster class
        print (f'The monster has {speed}')
    
monster = Monster()
print(monster.health)#this is an instance of class Monster
monster.attack()
monster.move(10)