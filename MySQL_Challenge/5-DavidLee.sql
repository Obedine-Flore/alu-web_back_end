SELECT COUNT(p.ProjectID) AS ProjectCount
FROM Projects p
JOIN ProjectTeam pt ON p.ProjectID = pt.ProjectID
JOIN Employees e ON pt.EmployeeID = e.EmployeeID
WHERE e.EmployeeName = 'David Lee'