-- CreateTable
CREATE TABLE `Student` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstname` VARCHAR(50) NOT NULL,
    `middlename` VARCHAR(50) NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `purok` VARCHAR(50) NULL,
    `barangay` VARCHAR(50) NOT NULL,
    `municipality` VARCHAR(50) NOT NULL,
    `province` VARCHAR(50) NOT NULL,
    `zip_code` INTEGER NOT NULL,
    `mother_name` VARCHAR(100) NOT NULL,
    `mother_occupation` VARCHAR(100) NOT NULL,
    `father_name` VARCHAR(100) NOT NULL,
    `father_occupation` VARCHAR(100) NOT NULL,
    `course` VARCHAR(80) NOT NULL,
    `major` VARCHAR(80) NOT NULL,
    `school_id_number` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
