/** Auto-generated by test_app.py:TestApp.test_generate_options_js */
export interface OptionsState {
    server: boolean
    showhost: boolean
    add_upstream_certs_to_client_chain: boolean
    confdir: string
    certs: string[]
    cert_passphrase: string | undefined
    ciphers_client: string | undefined
    ciphers_server: string | undefined
    client_certs: string | undefined
    ignore_hosts: string[]
    allow_hosts: string[]
    listen_host: string
    listen_port: number
    mode: string
    upstream_cert: boolean
    http2: boolean
    websocket: boolean
    rawtcp: boolean
    ssl_insecure: boolean
    ssl_verify_upstream_trusted_confdir: string | undefined
    ssl_verify_upstream_trusted_ca: string | undefined
    tcp_hosts: string[]
    content_view_lines_cutoff: number
    key_size: number
    body_size_limit: string | undefined
    keep_host_header: boolean
    block_global: boolean
    block_private: boolean
    block_list: string[]
    anticache: boolean
    anticomp: boolean
    client_replay: string[]
    command_history: boolean
    export_preserve_original_ip: boolean
    onboarding: boolean
    onboarding_host: string
    onboarding_port: number
    proxyauth: string | undefined
    connection_strategy: string
    proxy_debug: boolean
    scripts: string[]
    server_replay_kill_extra: boolean
    server_replay_nopop: boolean
    server_replay_refresh: boolean
    server_replay_use_headers: string[]
    server_replay: string[]
    server_replay_ignore_content: boolean
    server_replay_ignore_params: string[]
    server_replay_ignore_payload_params: string[]
    server_replay_ignore_host: boolean
    server_replay_ignore_port: boolean
    map_remote: string[]
    map_local: string[]
    modify_body: string[]
    modify_headers: string[]
    stickyauth: string | undefined
    stickycookie: string | undefined
    stream_large_bodies: string | undefined
    save_stream_file: string | undefined
    save_stream_filter: string | undefined
    tls_version_client_min: string
    tls_version_client_max: string
    tls_version_server_min: string
    tls_version_server_max: string
    upstream_auth: string | undefined
    web_open_browser: boolean
    web_debug: boolean
    web_port: number
    web_host: string
    web_columns: string[]
    intercept_active: boolean
    intercept: string | undefined
    rfile: string | undefined
    readfile_filter: string | undefined
    web_static_viewer: string | undefined
    view_filter: string | undefined
    view_order: string
    view_order_reversed: boolean
    console_focus_follow: boolean
    termlog_verbosity: string
}

export type Option = keyof OptionsState

export const defaultState: OptionsState = {
    server: true,
    showhost: false,
    add_upstream_certs_to_client_chain: false,
    confdir: "~/.mitmproxy",
    certs: [],
    cert_passphrase: undefined,
    ciphers_client: undefined,
    ciphers_server: undefined,
    client_certs: undefined,
    ignore_hosts: [],
    allow_hosts: [],
    listen_host: "",
    listen_port: 8080,
    mode: "regular",
    upstream_cert: true,
    http2: true,
    websocket: true,
    rawtcp: true,
    ssl_insecure: false,
    ssl_verify_upstream_trusted_confdir: undefined,
    ssl_verify_upstream_trusted_ca: undefined,
    tcp_hosts: [],
    content_view_lines_cutoff: 512,
    key_size: 2048,
    body_size_limit: undefined,
    keep_host_header: false,
    block_global: true,
    block_private: false,
    block_list: [],
    anticache: false,
    anticomp: false,
    client_replay: [],
    command_history: true,
    export_preserve_original_ip: false,
    onboarding: true,
    onboarding_host: "mitm.it",
    onboarding_port: 80,
    proxyauth: undefined,
    connection_strategy: "eager",
    proxy_debug: false,
    scripts: [],
    server_replay_kill_extra: false,
    server_replay_nopop: false,
    server_replay_refresh: true,
    server_replay_use_headers: [],
    server_replay: [],
    server_replay_ignore_content: false,
    server_replay_ignore_params: [],
    server_replay_ignore_payload_params: [],
    server_replay_ignore_host: false,
    server_replay_ignore_port: false,
    map_remote: [],
    map_local: [],
    modify_body: [],
    modify_headers: [],
    stickyauth: undefined,
    stickycookie: undefined,
    stream_large_bodies: undefined,
    save_stream_file: undefined,
    save_stream_filter: undefined,
    tls_version_client_min: "TLS1_2",
    tls_version_client_max: "UNBOUNDED",
    tls_version_server_min: "TLS1_2",
    tls_version_server_max: "UNBOUNDED",
    upstream_auth: undefined,
    web_open_browser: true,
    web_debug: false,
    web_port: 8081,
    web_host: "127.0.0.1",
    web_columns: ["tls", "icon", "path", "method", "status", "size", "time"],
    intercept_active: false,
    intercept: undefined,
    rfile: undefined,
    readfile_filter: undefined,
    web_static_viewer: "",
    view_filter: undefined,
    view_order: "time",
    view_order_reversed: false,
    console_focus_follow: false,
    termlog_verbosity: "info",
}
