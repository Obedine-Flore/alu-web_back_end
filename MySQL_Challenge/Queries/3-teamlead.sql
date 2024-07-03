SELECT e.FirstName, e.LastName
FROM Employees e
JOIN ProjectTeam pt ON e.EmployeeID = pt.EmployeeID
JOIN Projects p ON pt.ProjectID = p.ProjectID
WHERE p.ProjectName = 'Mobile App for Learning'
  AND pt.TeamLead = TRUE;