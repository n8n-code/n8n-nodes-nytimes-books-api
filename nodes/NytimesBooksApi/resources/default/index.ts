import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Lists Format",
					"value": "GET Lists Format",
					"action": "Best Seller List",
					"description": "Best Seller List",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists.{{$parameter[\"format\"]}}"
						}
					}
				},
				{
					"name": "GET Lists Best Sellers History Json",
					"value": "GET Lists Best Sellers History Json",
					"action": "Best Seller History List",
					"description": "Best Seller History List",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/best-sellers/history.json"
						}
					}
				},
				{
					"name": "GET Lists Names Format",
					"value": "GET Lists Names Format",
					"action": "Best Seller List Names",
					"description": "Best Seller List Names",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/names.{{$parameter[\"format\"]}}"
						}
					}
				},
				{
					"name": "GET Lists Overview Format",
					"value": "GET Lists Overview Format",
					"action": "Best Seller List Overview",
					"description": "Best Seller List Overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/overview.{{$parameter[\"format\"]}}"
						}
					}
				},
				{
					"name": "GET Lists Date List Json",
					"value": "GET Lists Date List Json",
					"action": "Best Seller List by Date",
					"description": "Best Seller List by Date",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lists/{{$parameter[\"date\"]}}/{{$parameter[\"list\"]}}.json"
						}
					}
				},
				{
					"name": "GET Reviews Format",
					"value": "GET Reviews Format",
					"action": "Reviews",
					"description": "Reviews",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reviews.{{$parameter[\"format\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /lists.{format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "List",
			"name": "list",
			"description": "The name of the Times best-seller list. To get valid values, use a list names request.\n\nBe sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "list",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Weeks On List",
			"name": "weeks-on-list",
			"description": "The number of weeks that the best seller has been on list-name, as of bestsellers-date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "weeks-on-list",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Bestsellers Date",
			"name": "bestsellers-date",
			"description": "YYYY-MM-DD\n\nThe week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bestsellers-date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Isbn",
			"name": "isbn",
			"description": "International Standard Book Number, 10 or 13 digits",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isbn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Published Date",
			"name": "published-date",
			"description": "YYYY-MM-DD\n\nThe date the best-seller list was published on NYTimes.com (compare bestsellers-date)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "published-date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Rank",
			"name": "rank",
			"description": "The rank of the best seller on list-name as of bestsellers-date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rank",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Rank Last Week",
			"name": "rank-last-week",
			"description": "The rank of the best seller on list-name one week prior to bestsellers-date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rank-last-week",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Sets the starting point of the result set",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sort-order",
			"description": "Sets the sort order of the result set",
			"default": "ASC",
			"type": "options",
			"options": [
				{
					"name": "ASC",
					"value": "ASC"
				},
				{
					"name": "DESC",
					"value": "DESC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort-order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Format"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/best-sellers/history.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Age Group",
			"name": "age-group",
			"description": "The target age group for the best seller.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "age-group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "author",
			"description": "The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).\n\nWhen searching the author field, you can specify any combination of first, middle and last names.\n\nWhen sort-by is set to author, the results will be sorted by author's first name. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "author",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Contributor",
			"name": "contributor",
			"description": "The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).\n\nWhen searching, you can specify any combination of first, middle and last names of any of the contributors.\n\nWhen sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contributor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Isbn",
			"name": "isbn",
			"description": "International Standard Book Number, 10 or 13 digits\n\nA best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isbn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"description": "The publisher's list price of the best seller, including decimal point",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "price",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Publisher",
			"name": "publisher",
			"description": "The standardized name of the publisher",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "publisher",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "The title of the best seller\n\nWhen searching, you can specify a portion of a title or a full title.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Best Sellers History Json"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/names.{format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Names Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "api-key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Names Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Names Format"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/overview.{format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Overview Format"
					]
				}
			}
		},
		{
			"displayName": "Published Date",
			"name": "published_date",
			"description": "The best-seller list publication date. YYYY-MM-DD\n\nYou do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.\n\nIf you do not include a published_date, the current week's best-sellers lists will be returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "published_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Overview Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "api-key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Overview Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Overview Format"
					]
				}
			}
		},
		{
			"displayName": "GET /lists/{date}/{list}.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Isbn",
			"name": "isbn",
			"description": "International Standard Book Number, 10 or 13 digits",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "isbn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "List Name",
			"name": "list-name",
			"description": "The name of the Times best-seller list. To get valid values, use a list names request.\n\nBe sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "list-name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Published Date",
			"name": "published-date",
			"description": "YYYY-MM-DD\n\nThe date the best-seller list was published on NYTimes.com (compare bestsellers-date)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "published-date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Bestsellers Date",
			"name": "bestsellers-date",
			"description": "YYYY-MM-DD\n\nThe week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bestsellers-date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Weeks On List",
			"name": "weeks-on-list",
			"description": "The number of weeks that the best seller has been on list-name, as of bestsellers-date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "weeks-on-list",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Rank",
			"name": "rank",
			"description": "The rank of the best seller on list-name as of bestsellers-date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "rank",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Rank Last Week",
			"name": "rank-last-week",
			"description": "The rank of the best seller on list-name one week prior to bestsellers-date",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "rank-last-week",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Sets the starting point of the result set",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sort-order",
			"description": "The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.",
			"default": "ASC",
			"type": "options",
			"options": [
				{
					"name": "ASC",
					"value": "ASC"
				},
				{
					"name": "DESC",
					"value": "DESC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort-order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Lists Date List Json"
					]
				}
			}
		},
		{
			"displayName": "GET /reviews.{format}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Reviews Format"
					]
				}
			}
		},
		{
			"displayName": "Isbn",
			"name": "isbn",
			"description": "Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "isbn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Reviews Format"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Reviews Format"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "author",
			"description": "You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "author",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Reviews Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "api-key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Reviews Format"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api-key (query: api-key)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api-key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Reviews Format"
					]
				}
			}
		},
];
