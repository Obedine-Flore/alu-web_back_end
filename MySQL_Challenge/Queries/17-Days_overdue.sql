DELIMITER $$

CREATE FUNCTION DaysOverdue(ProjectID INT) RETURNS INT
BEGIN
    DECLARE days INT;
    SELECT DATEDIFF(CURDATE(), Deadline) INTO days FROM Projects WHERE ProjectID = ProjectID;
    IF days > 0 THEN
        RETURN days;
    ELSE
        RETURN 0;
    END IF;
END$$

DELIMITER ;