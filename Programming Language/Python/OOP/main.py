class Item:
  pay_rate = 0.8
  def __init__(self, name: str, price: float, quantity=1):
    # Run validation to the received argument
    assert price >= 0, "Price {} is not greater than 0".format(price)
    assert quantity >= 0, "Quantity {} is not greater than 0".format(quantity)
    # Assign to self obj
    self.name = name
    self.price = price
    self.quantity = quantity
    
  # def __repr__(self):
  #   return "Item"
  
  def calcalate_total_price(self):
    return self.price * self.quantity
  
  def apply_discount(self):
    self.price = self.price * self.pay_rate
    
    
item1 = Item("Phone", 100, 1)
item2 = Item("Laptop", 1000, 3)
item3 = Item("Cable", 10, 5)
item4 = Item("Mouse", 50, 5)
item5 = Item("Keyboard", 75, 5)
    


# item1 = Item("phone",100,5)
# print(item1.name,item1.price,item1.quantity)
# print(item1.calcalate_total_price())

# print(item1.pay_rate)
# print(Item.__dict__) # All attributes for class
# print(item1.__dict__)

# item1.pay_rate = 0.7
# item1.apply_discount()
# print(item1.price)
# print(item1.name,item1.price,item1.quantity)