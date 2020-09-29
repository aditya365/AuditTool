import { securityGroup } from './securityGroup.model';

export interface SecurityGroupsResponse {
    items: securityGroup[];
    totalCount: number
}