INSERT INTO department (name)
VALUES 
('infectious diseases'),
('cardiology');

INSERT INTO role (title, salary, department_id)
VALUES
('doctor', 10, 1),
('doctor', 15, 2),
('nurse', 13, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('brit', 'sovic', 1),
('brad', 'prosch', 2, 1),
('alec', 'zoida', 3, 2);