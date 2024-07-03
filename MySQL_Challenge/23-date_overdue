CREATE VIEW OverdueProjects AS
SELECT ProjectID, ProjectName, Deadline, DATEDIFF(NOW(), Deadline) AS DaysOverdue
FROM Projects
WHERE Deadline < CURDATE();

-- Usage

SELECT * FROM OverdueProjects;
