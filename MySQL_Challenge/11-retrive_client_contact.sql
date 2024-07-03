CREATE VIEW ClientContacts AS
SELECT ClientID, ClientName, ClientContact, ClientEmail
FROM Clients;

-- Usage

SELECT * FROM ClientContacts;
