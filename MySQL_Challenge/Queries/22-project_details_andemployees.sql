CREATE VIEW ProjectDetails AS
SELECT p.ProjectID, p.ProjectName, p.Deadline, COUNT(pt.EmployeeID) AS TotalTeamMembers
FROM Projects p
LEFT JOIN ProjectTeam pt ON p.ProjectID = pt.ProjectID
GROUP BY p.ProjectID, p.ProjectName, p.Deadline;

-- Usage

SELECT * FROM ProjectDetails;
