-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema homeRent
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema homeRent
-- -----------------------------------------------------
 DROP DATABASE  IF EXISTS homeRent ;
CREATE SCHEMA IF NOT EXISTS `homeRent` DEFAULT CHARACTER SET utf8 ;
USE `homeRent` ;

-- -----------------------------------------------------
-- Table `homeRent`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeRent`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_lastName` VARCHAR(45) NOT NULL,
  `user_phone` VARCHAR(45) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homeRent`.`home`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homeRent`.`home` (
  `home_id` INT NOT NULL AUTO_INCREMENT,
  `home_description` VARCHAR(45) NULL,
  `home_title` varchar(45),
  `home_price` VARCHAR(45) NOT NULL,
  `home_images` VARCHAR(2000) NULL,
  `user_user_id` INT NOT NULL,
  PRIMARY KEY (`home_id`),
  INDEX `fk_home_user_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_home_user`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `homeRent`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
