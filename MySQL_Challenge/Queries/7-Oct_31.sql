SELECT DISTINCT ClientName FROM Clients 
JOIN Projects ON Clients.ClientID = Projects.ClientID 
WHERE Deadline > '2024-10-31';