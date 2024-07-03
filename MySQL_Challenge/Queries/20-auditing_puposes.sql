DELIMITER $$

CREATE TRIGGER LogProjectUpdates
AFTER UPDATE ON Projects
FOR EACH ROW
BEGIN
    INSERT INTO ProjectUpdatesLog (ProjectID, OldDeadline, NewDeadline, UpdateTime)
    VALUES (OLD.ProjectID, OLD.Deadline, NEW.Deadline, NOW());
END$$

DELIMITER ;