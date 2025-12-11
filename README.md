Run backend server:

go to backend-cardapp in vscode and: 

put your own values on POSTGRES_USER, POSTGRES_PASSWORD and POSTGRES_DB variables on the docker-compose.yml file

go to aplication.properties file in shoppingcart-backend/src/main/resources/ and change the datasource url, username and password to match the one that is created by docker compose.

go to shoppingcart-backend directory and run:

docker-compose up -d db

mvnw.cmd spring-boot:run, if you are on windows

mvnw spring-boot:run, if you are on linux/mac

change the spring.jpa.hibernate.ddl-auto property value from create to update after running the backend server once..

Run frontend server:

go to shoppingcart-frontend directory and run:

npm install

npm run dev