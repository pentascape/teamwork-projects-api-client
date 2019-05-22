import {Logger} from 'winston';
import {Teamwork} from '../types';


export default abstract class TeamworkResource {
    protected readonly service: Teamwork;
    protected readonly logger: Logger;

    constructor(service: Teamwork, logger: Logger) {
        this.service = service;
        this.logger = logger;
    }
}
