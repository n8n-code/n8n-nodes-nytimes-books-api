import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class NytimesBooksApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'nytimes-books-api',
		name: 'N8nDevNytimesBooksApi',
		icon: { light: 'file:./nytimes-books-api.png', dark: 'file:./nytimes-books-api.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Books API provides information about book reviews and The New York Times bestsellers lists',
		defaults: { name: 'nytimes-books-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNytimesBooksApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
