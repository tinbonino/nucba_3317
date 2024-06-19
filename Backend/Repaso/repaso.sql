-- Crear tabla "customers"
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(200) NOT NULL
);

-- Crear tabla "orders"
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INTEGER,
    amount NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

-- Insertar datos de ejemplo en "customers"
INSERT INTO customers (name, email, address) VALUES
('Alice Johnson', 'alice.johnson@example.com', '123 Main St, Springfield'),
('Bob Smith', 'bob.smith@example.com', '456 Elm St, Shelbyville');

-- Insertar datos de ejemplo en "orders"
INSERT INTO orders (order_date, customer_id, amount) VALUES
('2023-06-01', 1, 99.99),
('2023-06-02', 2, 149.99),
('2023-06-03', 1, 79.99);

--probar inner join
