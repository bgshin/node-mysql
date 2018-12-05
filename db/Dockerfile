FROM mysql:5.7

ENV MYSQL_DATABASE nba
ENV MYSQL_ROOT_PASSWORD irving
ENV MYSQL_USER kyrie
ENV MYSQL_PASSWORD irving
ENV DATABASE_HOST db

EXPOSE 3306

COPY ./sql-scripts /docker-entrypoint-initdb.d/
