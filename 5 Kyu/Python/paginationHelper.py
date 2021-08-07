class PaginationHelper:
    def __init__(self, collection, items_per_page):
        self.collection = collection
        self.items_per_page = items_per_page
  
  # returns the number of items within the entire collection
    def item_count(self):
        return len(self.collection)
  
  # returns the number of pages
    def page_count(self):
        count = self.item_count() / self.items_per_page
        return int(count) + 1
	
    def page_list(self):
        arr = list(self.collection)
        newArr = []
        n=0
        count = self.items_per_page
        for i in range(self.page_count()):
            if count <= len(arr):
                newArr.append(arr[slice(n , count)])
                n += self.items_per_page
                count += self.items_per_page
            else: 
                newArr.append(arr[slice(n, len(arr))])
        return list(filter(lambda x: x != [], newArr))

    def page_item_count(self,page_index):
        arr = self.page_list()
        if page_index <= len(arr) -1:
            return len(arr[page_index])
        else: return -1

    def page_index(self,item_index):
        if (item_index > len(self.collection) - 1) or (item_index < 0):
            return -1
        pageItem = list(self.collection)[item_index]
        for page in self.page_list():
            for item in page:
                if item == pageItem:
                    return self.page_list().index(page)
                
        
collection = range(1,10)
obj = PaginationHelper(collection, 2)

a = obj.page_list()
b = obj.page_item_count(2)
c = obj.page_index(23)
d = obj.page_index(3)
print(a)
print(b)
print(c)
print(d)
print(obj.item_count())

