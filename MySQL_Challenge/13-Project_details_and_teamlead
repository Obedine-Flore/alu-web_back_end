CREATE VIEW ProjectTeamLeads AS
SELECT p.ProjectID, p.ProjectName, p.Deadline,
       e.EmployeeName AS TeamLead
FROM Projects p
JOIN ProjectTeam pt ON p.ProjectID = pt.ProjectID AND pt.TeamLead = TRUE
JOIN Employees e ON pt.EmployeeID = e.EmployeeID;

SELECT * FROM ProjectTeamLeads;