const Loading = () => {
    return (
        <button class="btn btn-outline-primary" type="button" disabled="">
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
        </button >
    );
}
const Spinner = () => {
    return (
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
}

export { Loading, Spinner };