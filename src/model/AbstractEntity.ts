import {PrimaryGeneratedColumn} from "typeorm";

export default abstract class AbstractEntity {
    @PrimaryGeneratedColumn()
    protected id: number;
}
