CREATE VIEW EmployeeProjectCounts AS
SELECT e.EmployeeID, e.EmployeeName, COUNT(pt.ProjectID) AS TotalProjects
FROM Employees e
LEFT JOIN ProjectTeam pt ON e.EmployeeID = pt.EmployeeID
GROUP BY e.EmployeeID, e.EmployeeName;

SELECT * FROM EmployeeProjectCounts;