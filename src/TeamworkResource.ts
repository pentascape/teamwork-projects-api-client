import {Teamwork} from './types';

export default abstract class TeamworkResource {
    protected readonly service: Teamwork;

    constructor(service) {
        this.service = service;
    }
}
