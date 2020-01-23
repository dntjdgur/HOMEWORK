import os
import csv

csvpath = os.path.join('Resources', 'budget_data.csv')

total_count = 0
total_revenue = 0

textfile = open('Financial Analysis.txt', 'w')
with open(csvpath, newline='') as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')

    next(csvreader)

    total_number = []
    total_month = []
    number_change = []
        
    for row in csvreader:

        total_month.append(str(row[0]))
        total_number.append(int(row[1]))
        total_count = len(total_month)
        total_revenue = sum(total_number)

        # total_number.append(int(row[1]))

        # print(sum(total_number))

        for number in range(1, len(total_number)):
            curr_number = total_number[number]
            prev_number = total_number[number-1]
            number_change.append(curr_number - prev_number)

            average_change = sum(number_change)/len(number_change)

    max_number_change = max(number_change)
    min_number_change = min(number_change)

print('Financial Analysis')
print('-------------------------------')        
print('Total Month: ' + str(total_count))
print('Total Revenue: $' + str(total_revenue))
print('Total Average Change: $' + str(average_change))
print('Greatest Increase in Profits: $' + str(max_number_change))
print('Greatest Decrease in Profits: $' + str(min_number_change))

print('Financial Analysis', file=textfile)
print('-------------------------------', file=textfile)        
print('Total Month: ' + str(total_count), file=textfile)
print('Total Revenue: $' + str(total_revenue), file=textfile)
print('Total Average Change: $' + str(average_change), file=textfile)
print('Greatest Increase in Profits: $' + str(max_number_change), file=textfile)
print('Greatest Decrease in Profits: $' + str(min_number_change), file=textfile)

textfile.close()