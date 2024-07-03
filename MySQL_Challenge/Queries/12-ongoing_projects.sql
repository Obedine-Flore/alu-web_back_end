CREATE VIEW OngoingProjects AS
SELECT ProjectID, ProjectName, Deadline
FROM Projects
WHERE Deadline >= CURDATE();

-- Usage

SELECT * FROM OngoingProjects;