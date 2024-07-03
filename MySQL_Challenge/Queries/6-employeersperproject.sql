SELECT p.ProjectName, COUNT(pt.EmployeeID) AS TotalEmployees
FROM Projects p
JOIN ProjectTeam pt ON p.ProjectID = pt.ProjectID
GROUP BY p.ProjectName;