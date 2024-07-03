CREATE VIEW November2024Projects AS
SELECT p.ProjectName, c.ClientName, c.ContactName, c.ContactEmail
FROM Projects p
JOIN Clients c ON p.ProjectID = c.ClientID
WHERE YEAR(p.Deadline) = 2024 AND MONTH(p.Deadline) = 'Nov';

SELECT * FROM November2024Projects;
