# def pick_peaks(arr):
#   start = 1
#   peak_dict = {"pos":[],"peaks":[]}
#   control = True #subiendo, false bajando
 
#   for i in range(start,len(arr)-1):
    
#     peak=arr[i]
#     if peak > arr[i+1] and control == True :
#       peak_dict["pos"].append(i)
#       peak_dict["peaks"].append(peak)
#       control =False
#     if peak < arr[i+1] and control == False:
#       control = True
   
#   return peak_dict

# arr = [18, 18, 10, -3, -4, 15, 15, -1, 13, 17, 11, 4, 18, -4, 19, 4, 18, 10, -4, 8, 13, 9, 16, 18, 6, 7]
# print(pick_peaks(arr))

str = "HOLA"

print (str [:: -1])      
   
      
