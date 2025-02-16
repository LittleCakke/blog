export type IconName = "bubble-chat"
    | "check"
    | "copy"
    | "dashboard-square"
    | "github"
    | "home"
    | "idea"
    | "info";

export type Week = "Mon"
    | "Tue"
    | "Wed"
    | "Thu"
    | "Fri"
    | "Sat"
    | "Sun";

export type CodeType = "html"
    | "svg"
    | "xml"
    | "css"
    | "clike"
    | "javascript"
    | "bash"
    | "sh"
    | "shell"
    | "basic"
    | "batch"
    | "c"
    | "csharp"
    | "cs"
    | "dotnet"
    | "cpp"
    | "cli"
    | "cmake"
    | "csv"
    | "dart"
    | "git"
    | "go"
    | "gradle"
    | "groovy"
    | "haml"
    | "http"
    | "ini"
    | "java"
    | "javadoc"
    | "json"
    | "json5"
    | "kotlin"
    | "latex"
    | "tex"
    | "context"
    | "less"
    | "log"
    | "lua"
    | "markdown"
    | "md"
    | "makefile"
    | "matlab"
    | "php"
    | "powershell"
    | "python"
    | "py"
    | "jsx"
    | "tsx"
    | "sass"
    | "scss"
    | "scala"
    | "scheme"
    | "sql"
    | "swift"
    | "toml"
    | "typescript"
    | "yaml"
    | "yml";

export interface CarouselItem
{
    title: string;
    content: string;
    img: any;
}

export interface CalendarDate
{
    date?: number;
    isToday?: boolean;
}
