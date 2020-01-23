import os
import csv

csvpath = os.path.join('Resources', 'election_data.csv')

total_count = 0
total_revenue = 0

textfile = open('Election Result.txt', 'w')
with open(csvpath, newline='') as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')

    next(csvreader)

    voter_id = []
    candidate = []
    khan_count = 0
    correy_count = 0
    li_count = 0
    otooley_count = 0

    for row in csvreader:

        voter_id.append(str(row[0]))
        candidate.append(str(row[2]))
        total_count = len(voter_id)

        if (row[2] == 'Khan'):
            khan_count = khan_count + 1
        
        elif (row[2] == 'Correy'):
            correy_count = correy_count + 1
        
        elif (row[2] == 'Li'):
            li_count = li_count + 1
        
        else:
            otooley_count = otooley_count + 1

        perc_khan = (khan_count / total_count)*100
        perc_khan = round(perc_khan, 4)
        perc_correy = (correy_count / total_count)*100
        perc_correy = round(perc_correy, 4)
        perc_li = (li_count / total_count)*100
        perc_li = round(perc_li, 4)
        perc_otooley = (otooley_count / total_count)*100
        perc_otooley = round(perc_otooley, 4)        

        winner_vote = max(khan_count, correy_count, li_count, otooley_count)

        if (winner_vote == khan_count):
            final_winner = 'Khan'
        elif (winner_vote == correy_count):
            final_winner = 'Correy'
        elif (winner_vote == li_count):
            final_winner = 'Li'
        else:
            final_winnder = 'Ot\'ooley'

print('Election Results')
print('-------------------------------')        
print('Total Votes: ' + str(total_count))
print('-------------------------------')     
print('Khan: ' + str(perc_khan) + '%' + ' (' + str(khan_count) + ')')
print('Khan: ' + str(perc_correy) + '%' + ' (' + str(correy_count) + ')')
print('Khan: ' + str(perc_li) + '%' + ' (' + str(li_count) + ')')
print('Khan: ' + str(perc_otooley) + '%' + ' (' + str(otooley_count) + ')')
print('-------------------------------')        
print('Winner: ' + str(final_winner))
print('-------------------------------')        

print('Election Results', file=textfile)
print('-------------------------------', file=textfile)        
print('Total Votes: ' + str(total_count), file=textfile)
print('-------------------------------', file=textfile)     
print('Khan: ' + str(perc_khan) + '%' + ' (' + str(khan_count) + ')', file=textfile)
print('Khan: ' + str(perc_correy) + '%' + ' (' + str(correy_count) + ')', file=textfile)
print('Khan: ' + str(perc_li) + '%' + ' (' + str(li_count) + ')', file=textfile)
print('Khan: ' + str(perc_otooley) + '%' + ' (' + str(otooley_count) + ')', file=textfile)
print('-------------------------------', file=textfile)        
print('Winner: ' + str(final_winner), file=textfile)
print('-------------------------------', file=textfile)      

textfile.close()