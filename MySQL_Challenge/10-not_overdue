SELECT ProjectID, ProjectName, 
       CASE
           WHEN Deadline > CURDATE() THEN 'Overdue'
           ELSE 'Not Overdue'
       END AS Status
FROM Projects;