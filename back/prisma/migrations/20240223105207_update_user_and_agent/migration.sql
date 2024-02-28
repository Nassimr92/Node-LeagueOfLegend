-- AlterTable
ALTER TABLE `user` ADD COLUMN `agentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_agentId_fkey` FOREIGN KEY (`agentId`) REFERENCES `agent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
