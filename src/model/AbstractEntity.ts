import {PrimaryGeneratedColumn} from "typeorm";

export default abstract class AbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
