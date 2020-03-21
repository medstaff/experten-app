export interface Repository {
    /**
     * create a helper
     *
     * @param helper the helper to be created. Set id: null to create new user
     */
    createHelper(helper: Helper): Promise<Helper>;

    /**
     * create help request
     *
     * @param request the HelpRequest to be created
     */
    createHelpRequest(request: HelpRequest): Promise<HelpRequest>;

    /**
     * find helpers for request
     * @param forRequest HelpRequest to find helpers for
     */
    findHelpers(forRequest: HelpRequest): Promise<HelpRequestHelpers>;
}

/**
 * Currently, this is just a proxy for Service. We could implement some fancy caching strategies here...
 */
export class RepositoryImpl implements Repository {

    constructor(private service: Service = new FetchService()) {
    }

    createHelper(helper: Helper): Promise<Helper> {
        return this.service.createHelper(helper);
    }

    createHelpRequest(request: HelpRequest): Promise<HelpRequest> {
        return this.service.createHelpRequest(request);
    }

    findHelpers(forRequest: HelpRequest): Promise<HelpRequestHelpers> {
        // TODO: we could add some fancy caching strategies here and only fetch using `service` if data doesn't exist or expired
        return this.service.findHelpers(forRequest);
    }

}

enum Endpoint {
    Helper = "helper",
    HelpRequest = "HelpRequest"
}

/**
 * A service that can be used to fetch data
 */
export interface Service {
    /**
     * Create a helper
     *
     * @param helper
     */
    createHelper(helper: Helper): Promise<Helper>

    /**
     * Create a help request
     * @param request
     */
    createHelpRequest(request: HelpRequest): Promise<HelpRequest>

    /**
     * find helpers for request
     * @param forRequest HelpRequest to find helpers for
     */
    findHelpers(forRequest: HelpRequest): Promise<HelpRequestHelpers>
}

class FetchService implements Service {

    static HOST = "http://127.0.0.1/";
    static ENDPOINT_PREFIX = "api/v1/";

    createHelper(helper: Helper): Promise<Helper> {
        return this.post(Endpoint.Helper, helper);
    }

    createHelpRequest(request: HelpRequest): Promise<HelpRequest> {
        return this.post(Endpoint.HelpRequest, request);
    }

    findHelpers(forRequest: HelpRequest): Promise<HelpRequestHelpers> {
        return Promise.resolve({
            count: 3,
            skills: [
                {
                    skill: { id: 4, name: "Erste Hilfe" },
                    count: 2
                },
                {
                    skill: { id: 2, name: "Altenpflege" },
                    count: 1
                }
            ]
        });
    }


    private post<R>(endpoint: Endpoint, body: any): Promise<R> {
        // just act as if id was set by the backend :)
        let response = Object.assign({}, body);
        response.id = 1;
        return Promise.resolve(response);

        // TODO: actually perform network request

        /*return fetch(RepositoryImpl.HOST + RepositoryImpl.ENDPOINT_PREFIX + endpoint.toString(), {
            body: body,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json() as Promise<R>)*/
    }

}

module.exports = RepositoryImpl;
