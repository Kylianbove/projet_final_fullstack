FROM maven:3.6.3
EXPOSE 8080
ADD target/spring-boot-backend.jar spring-boot-backend.jar
ENTRYPOINT ["java","-jar","/spring-boot-backend.jar"]