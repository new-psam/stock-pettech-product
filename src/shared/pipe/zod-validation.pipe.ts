import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform {
    constructor(private schemma: ZodSchema) {}

    transform(value: any){
        try {
            const parsedValue = this.schemma.parse(value);
            return parsedValue;
        } catch (error) {
            throw new BadRequestException('Validation failed');
        }
    }
    
    
}