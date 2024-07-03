SELECT * FROM Projects 
JOIN Clients ON Projects.ClientID = Clients.ClientID 
WHERE ClientName = 'Big Retail Inc.' 
ORDER BY Deadline;