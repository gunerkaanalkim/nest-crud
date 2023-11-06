import {Module} from '@nestjs/common';
import {CatController} from "./cat.controller";
import {CatService} from "./cat.service";
import CatMapper from "./cat.mapper";
import CatEntity from "./cat.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([CatEntity]),
    ],
    controllers: [CatController],
    providers: [CatService, CatMapper]
})
export class CatsModule {
}
